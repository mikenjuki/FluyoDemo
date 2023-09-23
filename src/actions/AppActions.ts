import { Dispatch } from "redux";
import {
  GET_QUESTIONS_SUCCESS,
  UPDATE_CURRENT_QUESTION_SUCCESS,
  UPDATE_QUESTIONS_SUCCESS,
  GET_TRANSLATIONS_SUCCESS,
} from "../constants/actions";
// import { questions, translations } from "../constants/mockData";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const getQuestionsSuccess = (data: { questions: Question[] }) => ({
  type: GET_QUESTIONS_SUCCESS,
  payload: data.questions,
});

// Fetch questions from FireStore
const getQuestions = (id?: number) => (dispatch: Dispatch) => {
  const fetchData = async () => {
    try {
      const questionsRef = collection(db, "questions");
      const questionQuery = query(questionsRef, orderBy("questionNumber"));
      const querySnapshot = await getDocs(questionQuery);

      const fetchedData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Question[];

      const mappedQuestions = fetchedData
        .map((q: Question) => {
          return {
            ...q,
            state: "UNSOLVED" as const,
            isCorrect: false,
          };
        })
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        .filter((q, i) => i < 5);

      dispatch(
        getQuestionsSuccess({
          questions: mappedQuestions,
        })
      );
    } catch (error: any) {
      console.error("Error fetching data:", error);
    }
  };
  fetchData();
};

const updateQuestion = (id: string, updatedFields: Question) => ({
  type: UPDATE_QUESTIONS_SUCCESS,
  payload: { id, updatedFields },
});

const updateCurrentQuestion = (payload: Question) => ({
  type: UPDATE_CURRENT_QUESTION_SUCCESS,
  payload,
});

const getTranslationsSuccess = (payload: {
  translations: { [key: string]: string };
}) => ({
  type: GET_TRANSLATIONS_SUCCESS,
  payload: payload.translations,
});

// Fetch translations from FireStore
const getTranslations = () => (dispatch: Dispatch) => {
  const fetchData = async () => {
    try {
      const translationsRef = collection(db, "translations");
      const translationQuery = query(
        translationsRef,
        where("languagePair", "==", "en-de")
      );
      const querySnapshot = await getDocs(translationQuery);

      const translationData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      }))[0];

      const remappedTranslations: { [key: string]: string } = {};
      Object.keys(translationData).map((germanTerm: string) => {
        if (!germanTerm.includes("languagePair")) {
          const translationObj =
            translationData[germanTerm as keyof typeof translationData];
          remappedTranslations[germanTerm.toLowerCase()] = translationObj.en;
          return germanTerm;
        }
        return;
      });
      dispatch(
        getTranslationsSuccess({
          translations: remappedTranslations,
        })
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  fetchData();
};

export { getQuestions, updateQuestion, updateCurrentQuestion, getTranslations };
