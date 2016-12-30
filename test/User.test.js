import React        from 'react';
import test         from 'tape';
import { shallow }  from 'enzyme';


import User from '../src/User';


const userData = { name: 'Scott' };

test('<User /> renders correctly', function(t){

    let wrapper = shallow(<User user={ userData }/>);

    t.equal( wrapper.find('li').text().trim(), userData.name );

    t.end();
});