import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ContactsAppContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: []
        }
    }

    componentDidMount() {
        fetch('./contacts.json')
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {
                this.setState({contacts: responseData})
            })
            .catch((error) => {
               console.log(error);
            });
    }

    render() {
        return (
            <div>
                <ContactsApp contacts={this.state.contacts} />
            </div>
            );
    }
}

class ContactsApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterText: ''
        }
    }

    handleUserInput(searchTerm) {
        this.setState({filterText: searchTerm});
    }

    render() {
        return (
            <div>
                <SearchBar filterText={this.state.filterText}
                           onUserInput={this.handleUserInput.bind(this)} />
                <ContactList contacts={this.props.contacts}
                             filterText={this.state.filterText} />
            </div>
            )
        }
    }

ContactsApp.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
};

class SearchBar extends Component {
    handleChange(event) {
        this.props.onUserInput(event.target.value)
    }

    render() {
        return <input type="search" placeholder="search"
                      value={this.props.filterText}
                      onChange={this.handleChange.bind(this)}/>
    }
}

SearchBar.propTypes = {
    filterText: PropTypes.string.isRequired
}

class ContactList extends Component {
    render() {
        let filterContacts = this.props.contacts.filter(
            (contact) => contact.name.toLocaleLowerCase().indexOf(this.props.filterText.toLocaleLowerCase()) !== -1
        );
        return (
            <ul>
                {filterContacts.map(
                    (contact) => <ContactItem key={contact.email}
                                              name={contact.name}
                                              email={contact.email} />
                )}
            </ul>
        )
    }
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}

class ContactItem extends Component {
    render() {
        return (
            <li>{this.props.name} - {this.props.email}</li>
        )
    }
}

ContactItem.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string
}

export default ContactsAppContainer;