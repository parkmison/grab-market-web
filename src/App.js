import logo from "./logo.svg";
import "./App.css";
import ChildComponent from "./child.js";

function App() {
  const text = "안녕하세요 미박소입니다";
  const sayHello = function () {
    return <h3> 인프런 강의 너무 조아</h3>;
  };
  const sayHello2 = function () {
    alert("ㅎㅇ");
  };
  return (
    <div>
      <h1> hello!! </h1>
      <h2>{text}</h2>
      {sayHello()}
      <div
        onClick={function () {
          alert("ㅎㅇ");
        }}
      >
        클릭점
      </div>
      <ChildComponent name="그랩" age={27} />
      <ChildComponent name="미소" age={26} />
      <ChildComponent name="gg" age={50} />
      <ChildComponent name="hi" age={34} />
    </div>
  );
}

export default App;
