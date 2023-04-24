import Quiz from './containers/Quiz/Quiz';
import QuizCreator from './containers/QuizCreator/QuizCreator';
import QuizList from './containers/QuizList/QuizList';
import Auth from './containers/Auth/Auth';
import Layout from './hoc/Layout/Layout';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/" element={<QuizList/>}/>
          <Route path="/quiz-creator" element={<QuizCreator/>}/>
          <Route path="/quiz/:id" element={<Quiz/>}/>
        </Routes>
        {/* <Quiz/> */}
      </Layout>
  )
}

export default App;
