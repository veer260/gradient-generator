import Configurations from "../Configurations/Configurations";
import Gradient from "../Gradient/Gradient";
import Header from "../Header/Header";
import Styles from './GradientGrid.module.css';
import Colors from '../Colors/Colors';
import YourGradient from "../YourGradient/YourGradient";



function GradientGrid({children}) {
    return (
        <div className={Styles.gradientGrid}>
            <div className={Styles.headerWrapper}>
                <Header />
            </div>
            <div className={Styles.gradientContainer}>
                <Gradient />
            </div>
            <div className={Styles.ColorsWrapper}>
                <Colors />
            </div>
            
            <div className={Styles.conFigurationWrapper}>
                <Configurations />
            </div>  
            <div className={Styles.codeWrapper}>
                <h2>Your Gradient:</h2>
                <YourGradient/ >    
            </div> 
        </div>
    )
}

export default GradientGrid;