import * as React from 'react';
import styles from './Paragraph.module.css';
import { FiArrowDownCircle } from 'react-icons/fi';

interface Props {
    heading: string,
    body: string,
}

export function Paragraph (props: Props): React.ReactElement {

    const [open, setOpen] = React.useState(true);

    function handleClick () {
        console.log("trigger");
        setOpen(prevState => !prevState)
    }

    return (
        <div className={styles.paragraphWrapper}>
            <div className={styles.headingWrapper} onClick={handleClick} >
                <div className={styles.heading}>
                    <h3>{props.heading}</h3>
                </div>

                <div className={open ? styles.icon : styles.iconClicked}>
                    <FiArrowDownCircle size={"24px"} />
                </div>
            </div>
            <div className={ open ? styles.body : styles.bodyOpened}>
                <p>{props.body}</p>
            </div>
        </div>
    )
    
}
