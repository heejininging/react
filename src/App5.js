import { Fragment } from "react";
import InterationComponent from "./component/InterationComponent";
import InterationComponent2 from "./component/InterationComponent2";
import InterationComponentQ from "./component/InterationComponentQ";
import InterationComponentQ2 from "./component/InterationComponentQ2";


const App = () => {

    return (
    <Fragment>
        <InterationComponent/>
        <hr />
        <InterationComponent2/>

        {/* 실습 */}
        <hr></hr>
        <InterationComponentQ/>
        <InterationComponentQ2/>
    </Fragment>

    )
}
export default App;