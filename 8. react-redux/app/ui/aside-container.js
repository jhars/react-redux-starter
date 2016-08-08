import React from 'react';
import store from 'store';
import { connect } from 'react-redux';
import Aside from './aside';

//ORIGINAL
// const stateToProps = function(state) {
//     return {
//         hasUsers: state.userReducer.users.length ? true : false
//     }
// }

// export default connect(stateToProps)(Aside);

const AsideContainer = React.createClass({
	render: function() {
		return (
			<Aside hasUsers={this.props.hasUsers} /> // hasUsers becomes the State
		)
	}
});

// React React is good for the Subscription part of thingds, not the dispatch part

const storeSelector = function (store) {
	console.log(store);
	return {
		hasUsers: store.userReducer.users.length ? true : false
	}
}

export default connect(storeSelector)(AsideContainer)