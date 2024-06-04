import { Button, CustomDatePicker, CustomInput, CustomInputNumber, CustomInputPassword, CustomSelect } from '@components/form';
import { CustomRow, Flex } from '@components/others';
import { Col, Form } from 'antd';
import React from 'react'
import styled from 'styled-components';
import { HeaderWrap, SignInTitle } from '../styles';
import { Container } from '@theme/Styled';

const SignUpForm = () => {

    const [form] = Form.useForm();

    const onFinish = values => {

        // form.resetFields();
    }

    return (
        <HeaderWrap>
            <Container>
                <Form onFinish={onFinish}
                    labelCol={{
                        span: 24,
                    }}
                    autoComplete='off'
                    wrapperCol={{
                        span: 24,
                    }}
                    form={form}
                    // style={{ padding: '15px', borderRadius: 10 }}
                >
                    <CustomRow space={[24, 24]}>
                        <Col span={24}>
                            <Flex>
                                <SignInTitle>PERSONAL INFORMATION</SignInTitle>
                            </Flex>
                        </Col>
                        <Col span={24} md={12}>
                            <CustomInput
                                name="userName"
                                label={'User Name'}
                                placeholder={'Enter your username'}
                                rules={[
                                    { required: true, message: 'Please enter your user name' },
                                ]} />
                        </Col>

                        <Col span={24} md={12}>
                            <CustomInput
                                name="email"
                                label={'Email'}
                                placeholder={'Enter your email'}
                                rules={[
                                    { required: true, message: 'Please enter your email address' },
                                ]} />
                        </Col>

                        <Col span={24} md={12}>
                            <CustomInputNumber
                                name="phoneNummber"
                                label={'Phone Number'}
                                placeholder={'Enter your phone number'}
                                rules={[
                                    { required: true, message: 'Please enter your phone number' },
                                ]} />
                        </Col>


                        <Col span={24} md={12}>
                            <CustomInputNumber
                                name="alternateNummber"
                                label={'Alternate Phone Number'}
                                placeholder={'Enter your alternate phone number'}
                                rules={[
                                    { required: true, message: 'Please enter your alternate phone number' },
                                ]} />
                        </Col>

                        <Col span={24} md={12}>
                            <CustomSelect
                                name={'gender'}
                                label={'Gender'}
                                placeholder={'Select gender'}
                                options={[]}
                                rules={[
                                    { required: true, message: 'Please select gender' },
                                ]}
                            />
                        </Col>



                        <Col span={24}>
                            <Flex style={{ margin: '20px 0px 0px 0px' }}>
                                <SignInTitle>LOGIN INFORMATION</SignInTitle>
                            </Flex>
                        </Col>

                        {/* <Col span={24} md={12}>
                        <CustomDatePicker
                            label={'Date of Birth'}
                            name={'dob'}
                            placeholder={'Select Date of Birth'}
                            rules={[
                                { required: true, message: 'Please select date of birth' },
                            ]}
                        />
                    </Col> */}

                        <Col span={24} md={12}>
                            <CustomInputPassword
                                name="password"
                                label={'Password'}
                                placeholder={'Enter your password'}
                                rules={[
                                    { required: true, message: 'Please enter a password' },
                                ]} />
                        </Col>

                        <Col span={24} md={12}>
                            <CustomInputPassword
                                name="confirmPassword"
                                label={'Confirm Password'}
                                placeholder={'Re-enter your password'}
                                rules={[
                                    { required: true, message: 'Please re-enter password' },
                                ]} />
                        </Col>



                    </CustomRow>

                    <Flex margin={'30px 15px'}>
                        <Button.Primary text={'Submit'} htmlType="submit" />
                    </Flex>
                </Form>


            </Container>
        </HeaderWrap>
    )
}

export default SignUpForm
