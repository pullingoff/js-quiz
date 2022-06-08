import React from "react";
import QuizContainer from "./containers/QuizContainer";
import "./App.scss"
import Layout from "./layout/Layout";

const App: React.FC =()=> {

  return (
    <Layout>
      <QuizContainer />
    </Layout>
  );
}

export default App;
