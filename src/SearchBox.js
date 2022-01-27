import React from 'react';

const SearchBox=({searchfield ,searchrecord})=>{
	return(
		<div className='pa4'>
			<input
				className ='pa2 ba b--green bg-light-green'
				type='search' 
				placeholder='search cats'
				onChange={searchrecord}
			/>
		</div>
		);
}
export default SearchBox;