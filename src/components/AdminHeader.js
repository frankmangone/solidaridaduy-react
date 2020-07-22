import React from 'react';
import { Link } from 'react-router-dom';
/* Context */
import { useAuth } from '../context/auth';

const AdminHeader = () => {

	const { currentAdmin } = useAuth();

	return (
		<header className='admin-header'>
			<h3>Solidaridad.uy Admin - {`${currentAdmin.first_name} ${currentAdmin.last_name}`}</h3>
			<Link to='/admin-logout'>Cerrar sesión</Link> 
		</header>
	)
}

export default AdminHeader;