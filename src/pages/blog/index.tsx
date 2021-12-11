import {ReactElement} from 'react';
import { Post } from '../../components/Post/Post';
import styles from './blog.module.css';

export default function Blog(): ReactElement {
    return (
        <div className={styles.container}>
        <h1 className={styles.heading}>
            <span>The Streaming </span> 
            <span>
             Calculator Blog
            </span>
        </h1>
        <div>
            <Post type={'Featured'}/>
            <div className={styles.postsGrid}>
                <Post type={'Secondary'}/>
                <Post type={'Secondary'}/>
                <Post type={'Secondary'}/>
                <Post type={'Secondary'}/>
                <Post type={'Secondary'}/>
                <Post type={'Secondary'}/>
            </div>
        </div>
        </div>
    )

}