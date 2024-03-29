import React from 'react';
import { shallow } from 'enzyme';
import BookDetail from './index';

describe('BookDetail', () => {
    it('Shows description', () => {
        const props = {
            book: {
                name: "Refactoring",
                description: "The book about how to do refactoring"
            }
        };
        const wrapper = shallow(<BookDetail {...props}/>);
        expect(wrapper.find('.description').text()).toEqual("The book about how to do refactoring");
    });
    it('Shows *more* link when description is too long', () => {
        const props = {
            book: {
                name: "Refactoring",
                description: "The book about how to do refactoring ...."
            }
        };
        const wrapper = shallow(<BookDetail {...props}/>);
        expect(wrapper.find('a.show-more').length).toEqual(1);
        expect(wrapper.find('.description').text()).toEqual("The book about how to do refactoring ....");
    });
    it('Shows the book name when no description was given', () => {
        const props = {
            book: {
                name: "Refactoring"
            }
        };
        const wrapper = shallow(<BookDetail {...props}/>);
        expect(wrapper.find('.description').text()).toEqual("Refactoring")
    });
    it('Shows book name', () => {
        const props = {
            book: {
                name: "Refactoring",
                description: "The book about how to do refactoring"
            }
        };
        const wrapper = shallow(<BookDetail {...props}/>);
        expect(wrapper.find('.name').text()).toEqual("Refactoring");
    })
});