import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { getTutorials } from "./redux/thunks/productThunk";
import routes from "./routes/routes";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTutorials())
  }, [dispatch])

  return (
    <div>
        <RouterProvider router={routes} />
    </div>
  );
}

export default App;
