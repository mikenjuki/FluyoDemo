import {
  GET_EXERCISES_SUCCESS,
  GET_QUESTIONS_SUCCESS,
  GET_TRANSLATIONS_SUCCESS,
  UPDATE_CURRENT_QUESTION_SUCCESS,
  UPDATE_QUESTIONS_SUCCESS,
} from "../constants/actions";

const INITIAL_STATE: IAppState = {
  questions: [],
  error: null,
  currentQuestion: undefined,
  translations: {},
};

const AppReducer = (state = INITIAL_STATE, action: ReduxAction): IAppState => {
  const { payload, type } = action;
  switch (type) {
    case GET_QUESTIONS_SUCCESS: {
      return {
        ...state,
        questions: payload,
      };
    }
    case UPDATE_QUESTIONS_SUCCESS: {
      const newQuestions = state.questions.map((question: Question) => {
        if (question?.id === payload?.id) {
          return {
            ...question,
            ...payload.updatedFields,
          };
        }
        return question;
      });
      return {
        ...state,
        questions: newQuestions,
      };
    }
    case UPDATE_CURRENT_QUESTION_SUCCESS: {
      return {
        ...state,
        currentQuestion: payload,
      };
    }
    case GET_TRANSLATIONS_SUCCESS: {
      return {
        ...state,
        translations: payload,
      };
    }

    default:
      return state;
  }
};

export default AppReducer;
