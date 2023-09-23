type ReduxAction = {
  type: string;
  payload: any;
}

type IAppState = {
  questions: Question[];
  error: any,
  currentQuestion?: Question;
  translations: {[key: string]: string};
}

type IAuthState = {
  token: string;
}

type IState = {
  app: IAppState;
  auth: IAuthState;
}

interface Question {
  incompleteSentence?: string;
  languagePair?: string;
  correctAnswer?: string;
  missingWord?: {
    options: string[];
    index: number;
  };
  englishSentence?: string;
  questionNumber?: number;
  id?: string;
  state?: "UNSOLVED" | "SUBMITTED" | "SOLVED";
  isCorrect?: boolean;
}

type Answer = {
  selected: string,
  id: string,
  index: number
}