import { apiConnector } from "../apiConnector";
import { setProjectData, setLoading } from "../../slices/projectSlice";
import { useNavigate } from "react-router-dom";

export function uploadProject(projectData,navigate) {

  const UPLOAD_PROJECT_API = "http://localhost:5000/api/users/projects"
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      // Assuming you have an API endpoint for uploading projects
      const response = await apiConnector("POST", UPLOAD_PROJECT_API, projectData);

      console.log("UPLOAD PROJECT API RESPONSE:", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      // Assuming the API returns the uploaded project data
      dispatch(setProjectData(response.data.project));
      navigate("/allProjects")
      // Handle any additional logic after successfully uploading the project
    } catch (error) {
      console.error("UPLOAD PROJECT API ERROR:", error);
      // Dispatch an action to set an error state if needed
    }
    dispatch(setLoading(false));
  };
}
