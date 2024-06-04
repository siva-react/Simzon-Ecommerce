import React from 'react'
import styled from 'styled-components'
import { Col, Form, Input } from 'antd'
import { CustomRow, Flex } from '@components/others'
import { Button, CustomInput, CustomInputPassword } from '@components/form'
import { HeaderWrap, SignInSubTitle, SignInTitle } from '../styles'
import { Container } from '@theme/Styled'

const InputWrapper = styled.div`
  padding-bottom: 25px;

`


const SignInForm = ({ handleSignIn }) => {

  const [form] = Form.useForm();

  const onFinish = values => {
    handleSignIn(values)
    // form.resetFields();
  }

  return (
    // <HeaderWrap>

    //   <Flex center={'true'} margin={'20px 0px'}>
    //     <h1>Login</h1>
    //   </Flex>

    //   <Form onFinish={onFinish}
    //     labelCol={{
    //       span: 24,
    //     }}
    //     autoComplete='off'
    //     wrapperCol={{
    //       span: 24,
    //     }}
    //     form={form}
    //     style={{ Width: '30%', border: '1px solid black', padding: '40px 15px 30px 15px', borderRadius: 10, margin: '0px 20px' }}
    //   >

    //     <CustomRow space={[24, 24]}>
    //       <Col span={24}>
    //         <CustomInput
    //           name="email"
    //           placeholder={'Enter your Email'}
    //           rules={[
    //             { required: true, message: 'Please enter your email address' },
    //           ]} />
    //       </Col>

    //       <Col span={24}>
    //         <CustomInputPassword
    //           name="password"
    //           placeholder={'Enter your Password'}
    //           rules={[
    //             { required: true, message: 'Please enter a password' },
    //           ]} />
    //       </Col>

    //     </CustomRow>
    //     <Flex center={'true'} gap={'20px'} margin={'20px 0px 0px 0px'}>
    //       <Button.Primary text={'Submit'} htmlType="submit" />
    //     </Flex>

    //   </Form>
    // </HeaderWrap>
    <HeaderWrap>
      <Container>
        <CustomRow space={[24, 24]}>
          <Col span={24} md={12}>
            <Col span={24}>
              <Flex>
                <SignInTitle>NEW CUSTOMERS</SignInTitle>
              </Flex>
              <SignInSubTitle>
                By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.
              </SignInSubTitle>
              <Flex margin={'30px 0px'}>
                <Button.Primary text={'CREATE AN ACCOUNT'} />
              </Flex>
            </Col>
          </Col>
          <Col span={24} md={12}>
            <Form onFinish={onFinish}
              labelCol={{
                span: 24,
              }}
              autoComplete='off'
              wrapperCol={{
                span: 24,
              }}
              form={form}

            >

              <CustomRow space={[24, 24]}>
                <Col span={24}>
                  <Flex>
                    <SignInTitle>REGISTERED CUSTOMERS</SignInTitle>
                  </Flex>
                  <SignInSubTitle>
                  If you have an account with us, please log in.              </SignInSubTitle>
                </Col>
                <Col span={24}>
                  <CustomInput
                    name="email"
                    placeholder={'Enter your Email'}
                    rules={[
                      { required: true, message: 'Please enter your email address' },
                    ]} />
                </Col>

                <Col span={24}>
                  <CustomInputPassword
                    name="password"
                    placeholder={'Enter your Password'}
                    rules={[
                      { required: true, message: 'Please enter a password' },
                    ]} />
                </Col>

              </CustomRow>
              <Flex margin={'20px 15px'}>
                <Button.Primary text={'Submit'} htmlType="submit" />
              </Flex>

            </Form>
          </Col>
        </CustomRow>
      </Container>
    </HeaderWrap>
  )
}

export default SignInForm
