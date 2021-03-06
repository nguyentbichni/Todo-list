import React from 'react';
import {
  Button,
  Modal,
  Form as FormBootstrap,
} from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function ModifyListModal({
  isShowModal,
  handleHideModal,
  handleSubmitForm,
  modalData,
}) {
  return (
    <Modal show={isShowModal} onHide={handleHideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                      {`${modalData.type === 'create' ? 'Add' : 'Edit'} Task`}
                   </Modal.Title>
                </Modal.Header>

                <Formik
                    initialValues={modalData.type === 'create'
                    ? {
                      title: '',
                      description: '',
                    }
                    : {
                      title: modalData.title,
                      description: modalData.description,
                    }
                  }
                  validationSchema={Yup.object({
                    title: Yup.string()
                      .required('Nội dung công việc không được để trống')
                      .max(50, 'Nội dung công việc không được quá 50 kí tự'),
                    description: Yup.string()
                      .required('Mô tả công việc không được để trống')
                      .max(50, 'Mô tả công việc không được quá 200 kí tự'),
                  })}
                    onSubmit = {(values) => handleSubmitForm(values, modalData.type, modalData.id)}
                >
                <Form>
                <Modal.Body>
                    <FormBootstrap.Group>
                    <label htmlFor="title">Task</label>
                    <Field  name="title" className="form-control" type="text">

                    </Field>
                    <div className="text-danger"><ErrorMessage name="title" /></div>

                    <label htmlFor="title"> Content of Task</label>
                    <Field  name="description" className="form-control" type="text" as="textarea">
                    </Field>
                    <div className="text-danger"><ErrorMessage name="description" /></div>

                    </FormBootstrap.Group>            
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {handleHideModal()}}>
                        Close
                    </Button>
                    <Button  type="submit" variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
                </Form>
                </Formik>
            </Modal>
  );
}

export default ModifyListModal;
