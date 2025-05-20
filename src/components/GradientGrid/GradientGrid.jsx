import Configurations from "../Configurations/Configurations";
import Gradient from "../Gradient/Gradient";
import Header from "../Header/Header";
import Styles from './GradientGrid.module.css';


function GradientGrid({children}) {
    return (
        <div className={Styles.gradientGrid}>
            <Header />
            <Gradient />
            <Configurations />
        </div>
    )
}

export default GradientGrid;