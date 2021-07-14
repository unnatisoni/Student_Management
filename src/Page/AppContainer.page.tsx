import React, { memo } from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardPage from "./Dashboard.page";
import LecturePage from "./Lecture.page";
import RecordingsPage from "./Recordings.page";
interface Props{
}
const AppContainer: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-row">
        <Sidebar></Sidebar>
        <Switch>
            <Route path="/dashboard">
                <DashboardPage></DashboardPage>
            </Route>
            <Route path="/recordings">
                <RecordingsPage></RecordingsPage>
            </Route>
            <Route path= "/batch/:batchNumber/lecture/:lectureNumber">
                <LecturePage />
            </Route>

        </Switch>
    </div>
);
};

AppContainer.defaultProps = {
}

export default memo(AppContainer);