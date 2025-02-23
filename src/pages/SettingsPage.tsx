// import { clearIdb } from "@/webtools/utils.ts"
import styles from "./SettingsPage.module.css"

const SettingsPage = () => {
    const handleClearIdb = async () => {
        // TODO hookup webcore
        // await clearIdb()
    }

    return (
        <div className={styles.inner}>
            <h1>Settings</h1>
            <ul className={styles.settingsList}>
                <li className={styles.settingItem}>
                    <span className={styles.settingLabel}>Clear IndexedDB</span>
                    <button
                        type={"button"}
                        onClick={handleClearIdb}
                    >
                        Clear
                    </button>
                </li>
                <li className={styles.settingItem}>
                    <span className={styles.settingLabel}>Example Setting</span>
                    <input
                        type="text"
                        className={styles.settingInput}
                    />
                </li>
            </ul>
        </div>
    )
}

export default SettingsPage
