import { IconButton, Paper } from '@mui/material';
import { Search } from '@mui/icons-material';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
	return (
		<div>
			<Paper
				component="form"
				onSubmit={() => {}}
				sx={{
					borderRadius: 20,
					border: '1px solid #e3e3e3',
					ol: 2,
					boxShadow: 'none',
					mr: { sm: 5 }
				}}
			>
				<input className="search-bar" placeholder="Search..." value="" onChange={() => {}} />
				<IconButton>
					<Search />
				</IconButton>
			</Paper>
		</div>
	);
};

export default SearchBar;
