import "./App.css";
import Amit from "./components/Amit";
import AxiosGet from "./components/AxiosGet";
import AxiosPost from "./components/AxiosPost";
import ChangeTheme from "./components/ChangeTheme";
import Checkbox from "./components/Checkbox";
import Parent from "./components/Parent";
// import { ErrorBoundary } from "react-error-boundary";
// import React, { Suspense } from "react";
// import ErrorFallback from "./components/ErrorFallback";
import Folder from "./components/Folder";
// const Lazy = React.lazy(() => {
//   console.log("Lazy component is loading");
//    import("./components/ReactLazy");
// });
import explorer from "./data/folderData"
import Form from "./components/Form"
import ImageDiv from "./components/ImageDiv";
import Debounce from "./components/Debounce";
import Throttle from "./components/Throttle";
import Tabs from "./components/Tabs";
import Todo from "./components/Todo";
import InfiniteScroll from "./components/InfiniteScroll";
import Pagination from "./components/Pagination";
import Progress from "./components/Progress";
import Counter from "./components/CounterComp/Counter";
import UseReducer from "./components/UseReducer";
import CustomHook from "./components/CustomHook";
import ChatApp from "./components/ChatApp";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div>
      {/* <Amit /> */}
      {/* <AxiosGet /> */}
      {/* <AxiosPost /> */}
      {/* <ChangeTheme /> */}
      {/* <Checkbox /> */}
      {/* <Parent /> */}
      {/* <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          window.location.reload();
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Lazy />
        </Suspense>
      </ErrorBoundary> */}
      {/* <Folder explorer={explorer}/> */}
      {/* <Form /> */}
      {/* <ImageDiv /> */}
      {/* <Debounce /> */}
      {/* <Throttle /> */}
      {/* <Tabs /> */}
      {/* <Todo /> */}
      {/* <InfiniteScroll /> */}
      {/* <Pagination /> */}
      {/* <Progress /> */}
      {/* <Counter /> */}
      {/* <UseReducer /> */}
      {/* <CustomHook /> */}
      {/* <ChatApp /> */}
      <ShoppingCart />
    </div>
  );
}

export default App;
