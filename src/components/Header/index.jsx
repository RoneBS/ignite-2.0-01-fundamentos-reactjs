import igniteLogo from '../../assets/ignite-logo.svg'

import styles from './style.module.css'

export const Header = () => {
  return(
   <header className={styles.header}>
     <img src={igniteLogo} alt="Logotipo Ignite Feed" />
     <strong>Ignite Feed</strong>
   </header>
  )
}