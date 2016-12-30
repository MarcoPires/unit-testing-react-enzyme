import React from 'react';
import test  from 'tape';
import { shallow, render } from 'enzyme';


import UserList from '../src/UserList';


const userData = [{
    name: 'Steve'
}, {
    name: 'Tony'
}, {
    name: 'Phil'
}, {
    name: 'bobbi'
}];

test('<UserList /> renders correctly', function(t){
    //shallow knows about react
    let shallowWrapper = shallow(<UserList users = { userData }/>);
    //render only renders the component into html
    let staticWrapper  = render(<UserList users  = { userData }/>);

    t.equal( shallowWrapper.find('h1').length, 1, 'Found <h1> with shallow' );
    t.equal( staticWrapper.find('h1').length,  1, 'Found <h1> with render' );


    t.equal( shallowWrapper.find('li').length,    0,               'No <li>s in shallow' );
    t.equal( shallowWrapper.find('User').length,  userData.length, 'Found <User>s in shallow' );


    t.equal( staticWrapper.find('li').length,    userData.length, 'Found <li>s in render' );
    t.equal( staticWrapper.find('User').length,  0,               'No <User>s in render' );

    t.end();
});

test('<UserList /> can filter users', function(t){
    let wrapper = shallow(<UserList users = { userData }/>);

    t.equal( wrapper.state('filter'),'', 
        'State starts as empty sting' );
    t.equal( wrapper.find('User').length, userData.length, 
        ('Initial state: display all users-> ' + wrapper.find('User').length + '/' + userData.length) );
    
    t.equal( (wrapper.setState({ filter: 'e' }).state('filter')), 'e',
        'State starts as empty sting' );
    t.notEqual( wrapper.find('User').length, userData.length, 
        ('Filtered state: does not show all users -> ' + wrapper.find('User').length + '/' + userData.length)  );
    

    t.end();
});