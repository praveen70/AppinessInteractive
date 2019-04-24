import React from 'react';
import { connect } from 'react-redux';
import { userData} from '../../action/dashboardAction';
import { Table, Card } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

class Dashboard extends React.Component{

    
    componentDidMount = () => {
        this.props.userData();
    }
    render(){
        let data2 = this.props.empData
        
          const columns = [{
            title: 'ID',
            dataIndex: 'id',
            key: 'name',
          },{
            title: 'name',
            dataIndex: 'name',
            key: 'name',
          }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
          }, {
            title: 'Email',
            dataIndex: 'email',
            key: 'address',
          }, {
            title: 'Phone Number',
            dataIndex: 'phoneNo',
            key: 'address',
          }];

        return(
            <div>
                 <Card title="Employee List" bordered={false} >
                     <Table dataSource={data2} columns={columns} />
                </Card>             
                

            </div>

        )
    }
}


const mapStateToProps = state => {

console.log(state.employeData.employeData)
    return {
        empData: state.employeData.employeData,
    };
}
export default connect(mapStateToProps, { userData })(Dashboard);
