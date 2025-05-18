import Styles from './MaxWidthWrapper.module.css';


function MaxWidthWrapper({children}) {
    return (
        <div className={Styles.maxWidthWrapper}>
            {children}
        </div>
    )

}

export default MaxWidthWrapper;