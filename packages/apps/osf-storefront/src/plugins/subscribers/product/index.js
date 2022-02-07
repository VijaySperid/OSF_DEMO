export default ({endpoint, getState, subscribeDispatch}) => {
    // Get value form the selector
    // const someValueFromTheState = someSelector(getState());
   return subscribeDispatch((action, state) => {
    const {type} = action;
    // console.log('action', state);
    // Track getState action
    if (type === 'getProduct') {
        // Add connections to other independent endpoints
        endpoint ('getProduct', {}, state);
    }
    // else if (type === 'myOtherAction') {
    // // Track myOtherAction action
    // }
   });
  };