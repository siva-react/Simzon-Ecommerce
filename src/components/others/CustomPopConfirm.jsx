import { Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const CustomPopconfirm = ({ children, record, confirm, cancel, title, description }) => (
    <Popconfirm
        title={title}
        description={description}
        onConfirm={() => confirm(record)}
        onCancel={cancel}
        icon={
            <QuestionCircleOutlined
                style={{
                    color: 'red',
                }}
            />
        }
        placement="topLeft"
        okText="Delete"
        cancelText="Cancel"
    >
        {children}
    </Popconfirm>
);

export default CustomPopconfirm 