import BreakLength from "./BreakLength"
import SessionLength from './SessionLength'

import styles from './Length.module.css'

function Length() {
    return (
        <div className={styles.lengthControl}>
            <BreakLength />
            <SessionLength />
        </div>
    )
}
export default Length