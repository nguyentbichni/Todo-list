import React from 'react';
import {
  Button,
  Modal,
  Form as FormBootstrap,
} from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function ConfirmDeleteModal({
  isShowModal,
  handleHideModal,
  handleDeleteTask,
  modalData
}) {
  return (
    <Modal show={isShowModal} onHide={handleHideModal}>
      <Modal.Header closeButton>
        <Modal.Title>Xóa công việc</Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={{ title: '' }}
        validationSchema={Yup.object({
        title: Yup.string()
            .required('Nội dung công việc không được để trống')
            .max(50, 'Nội dung công việc không được quá 50 kí tự'),
        })}
      >
        <Form>
          <Modal.Body>
            <FormBootstrap.Group>
              <label htmlFor="title">Bạn có chắc muốn xóa???</label>
            </FormBootstrap.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleHideModal()}>
              Hủy
            </Button>
            <Button type="submit" variant="primary" className="btn btn-danger"onClick={() => handleDeleteTask(modalData.index)} >
              Xác nhận
            </Button>
          </Modal.Footer>
        </Form>
      </Formik>
    </Modal>
  );
}

export default ConfirmDeleteModal;
