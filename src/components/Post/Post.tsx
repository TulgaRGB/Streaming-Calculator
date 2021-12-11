import {ReactElement} from 'react';
import classnames from 'classnames';
import styles from './Post.module.css';


type PostType = 'Featured' | 'Secondary';
interface Props {
    type: PostType
}


export function Post({type}: Props): ReactElement {

    const style = classnames(styles, {
        [styles.featured]: type === 'Featured',
        [styles.secondary]: type === 'Secondary'
      });

    return (
        <article className={style}> 
            <div className={styles.imageContainer}>
                <img src={'https://storage.googleapis.com/pr-newsroom-wp/1/2020/03/Header.png'} className={styles.image} />
            </div>
            <div className={styles.description}>
                <span className={styles.date}> March 05 2021 </span>
                <h2 className={styles.heading}> This is my very long heading </h2>
                <h3 className={styles.subTitle}> Experimental media query to apply styles based on specified container elements rather than the entire page. Currently implemented </h3>
            </div>
        </article>
    )
}