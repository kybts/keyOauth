import FormsFirebase from "./page/FormsFirebase";
import {AuthProvider} from "./context/authContext";
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <h1>KeyOAuth</h1>
      </div>
      <FormsFirebase />
    </AuthProvider>
  );
}

export default App;
