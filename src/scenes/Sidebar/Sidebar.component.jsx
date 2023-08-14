import styles from './Sidebar.module.css';
import SidebarMenu from '../SidebarMenu/SidebarMenu';

const AdminSidebar = () => {

  return (
    <div className={styles.container}>
      <SidebarMenu />
    </div>
  )
}

export default AdminSidebar;