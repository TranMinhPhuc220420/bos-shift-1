import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

// Firebase
import { getEmployeeList, deleteEmployee } from "../../../database";

import { PlusOutlined, FileExcelOutlined, TeamOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Modal, message, Table, Space, Popconfirm } from "antd";
const { Column, ColumnGroup } = Table;

// Components
import AddEmployeeForm from "../../../components/form/AddEmployee";
import EditEmployeeForm from "../../../components/form/EditEmployee";

const ManagerEmployee = () => {
  // Translation
  const { t } = useTranslation();

  // State
  const [employeeList, setEmployeeList] = useState([]);
  const [employeeListLoading, setEmployeeListLoading] = useState(true);
  const [idEmployeeDeleting, setIdEmployeeDeleting] = useState(null);
  const [idEmployeeEditing, setIdEmployeeEditing] = useState(null);

  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [employeeEdit, setEmployeeEdit] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  // Columns for the table
  const columns = [
    {
      title: t('LABEL_NAME'),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: t('LABEL_BRANCH'),
      dataIndex: 'branch_display',
      key: 'branch',
    },
    {
      title: t('LABEL_POSITION'),
      dataIndex: 'position_display',
      key: 'position',
    },
    {
      title: t('LABEL_LEVEL'),
      dataIndex: 'level_display',
      key: 'level',
    },
    {
      title: t('LABEL_SALARY'),
      dataIndex: 'salary_display',
      key: 'salary',
    },
  ];

  // Fetch data from firebase
  const fetchEmployeeList = async () => {
    setEmployeeListLoading(true);
    const employeeList = await getEmployeeList();
    if (employeeList) {
      setEmployeeList(employeeList);
    }
    else {
      setEmployeeList([]);
    }

    setEmployeeListLoading(false);
  };

  // Handlers functions
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    messageApi.open({
      type: 'success',
      content: t('MSG_SUCCESS_ADD_EMPLOYEE'),
      duration: 3,
    });

    // Fetch data again
    fetchEmployeeList();

    setIsModalOpen(false);
  }
  const handlerOnFail = () => {
    messageApi.open({
      type: 'error',
      content: t('MSG_ERROR_ADD_EMPLOYEE'),
      duration: 3,
    });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handlerConfirmDelete = async (employee) => {
    // Call the delete function here
    console.log("Delete employee with id: ", employee);

    const { key } = employee;
    setIdEmployeeDeleting(key);

    await deleteEmployee(key);
    messageApi.open({
      type: 'success',
      content: t('MSG_SUCCESS_DELETE_EMPLOYEE'),
      duration: 3,
    });

    // Fetch data again
    fetchEmployeeList();

    setIdEmployeeDeleting(false);
  }

  const handleEdit = (employee) => {
    // Call the edit function here
    console.log("Edit employee with id: ", employee);

    const { key } = employee;
    setIdEmployeeEditing(key);

    setEmployeeEdit(employee);
    setIsModalEditOpen(true);
  }
  const handleEditOk = () => {
    messageApi.open({
      type: 'success',
      content: t('MSG_SUCCESS_UPDATE_EMPLOYEE'),
      duration: 3,
    });
    
    // Fetch data again
    fetchEmployeeList();

    setIsModalEditOpen(false);
    setIdEmployeeEditing(false);
  };
  const handleEditFail = () => {
    messageApi.open({
      type: 'error',
      content: t('MSG_ERROR_UPDATE_EMPLOYEE'),
      duration: 3,
    });

    // Fetch data again
    fetchEmployeeList();

    setIsModalEditOpen(false);
    setIdEmployeeEditing(false);
  };
  const handleEditCancel = () => {
    setIsModalEditOpen(false);
    setIdEmployeeEditing(false);
  };

  // Effect
  useEffect(() => {
    // Fetch data here
    fetchEmployeeList();
  }, []);

  return (
    <div className="px-4 py-4 w-full">

      <div className="mb-2">
        <Breadcrumb items={[{ title: t('TXT_EMPLOYEE') }, { title: t('TXT_MANAGER') }]} />
      </div>

      <div className="w-full bg-white p-2 rounded-md shadow-sm">
        {/* Toolbar top */}
        <div className="flex align-items-center justify-between mb-4">
          {/* Left */}
          <div className="flex align-items-center">
            <TeamOutlined className="text-2xl text-primary mr-2" />
            <h1 className="text-2xl font-semibold">{t('TXT_EMPLOYEE_LIST')}</h1>
          </div>
          {/* Right */}
          <div className="flex align-items-center">
            <Button type="primary" icon={<PlusOutlined />} className="ml-2" onClick={showModal}>
              {t('TXT_ADD_NEW')}
            </Button>

            <Button type="primary" icon={<FileExcelOutlined />} className="ml-2">
              {t('TXT_ADD_BY_EXCEL')}
            </Button>
          </div>
        </div>

        {/* Table */}
        <Table dataSource={employeeList} loading={employeeListLoading}>
          {columns.map((column) => (
            <Column
              title={column.title}
              dataIndex={column.dataIndex}
              key={column.key}
            />
          ))}
          <Column title="Action" key="action" render={(_, record) => (
            <Space size="middle">
              <Button type="primary" icon={<EditOutlined />}
                onClick={() => handleEdit(record)}
                loading={idEmployeeEditing === record.key}
                disabled={idEmployeeDeleting === record.key || idEmployeeEditing === record.key}
              >
                {t('TXT_EDIT')}
              </Button>

              <Popconfirm
                title={t('TITLE_CONFIRM_DELETE')}
                description={t('CONFIRM_DELETE_EMPLOYEE')}
                onConfirm={() => handlerConfirmDelete(record)}
                okText={t('TXT_CONFIRM')}
                cancelText={t('TXT_CANCEL')}
              >
                <Button type="primary" icon={<DeleteOutlined />} danger
                  loading={idEmployeeDeleting === record.key}
                  disabled={idEmployeeDeleting === record.key || idEmployeeEditing === record.key}
                >
                  {t('TXT_DELETE')}
                </Button>
              </Popconfirm>

            </Space>
          )}
          />
        </Table>

        {/* Modal */}
        {contextHolder}
        <Modal title={t('TITLE_ADD_EMPLOYEE')} open={isModalOpen} footer={false}>
          {isModalOpen && <AddEmployeeForm onCancel={handleCancel} onOK={handleOk} onFail={handlerOnFail} />}
        </Modal>
        <Modal title={t('TITLE_EDIT_EMPLOYEE')} open={isModalEditOpen} footer={false}>
          {employeeEdit && <EditEmployeeForm employeeId={employeeEdit.key} employeeEdit={employeeEdit}
            onCancel={handleEditCancel}
            onOK={handleEditOk}
            onFail={handleEditFail}
          />}
        </Modal>

        {/* Test */}


      </div>
    </div>
  );
};

export default ManagerEmployee;