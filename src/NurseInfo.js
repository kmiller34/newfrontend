import React, {Component} from 'react'

export class NurseInfo extends Component{
    render(){
        return(
            <div>
                <table>
                    <th>
                        employeeID
                    </th>
                    <th>
                        address
                    </th>
                    <th>
                        age
                    </th>
                    <th>
                        phone number
                    </th>
                    <th>
                        gender
                    </th>
                    <th>
                        name
                    </th>
                    <th>
                        username
                    </th>
                    <th>
                        password
                    </th>
                </table>
            </div>
        )
    }
}