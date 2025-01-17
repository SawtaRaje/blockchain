import React, { useState } from 'react'

import { Button, ValidationTextComponent } from '../../../commonPages'

function RegisterComponent(props) {
    const { onClickSignIn } = props

    const [registerInfo, setRegisterInfo] = useState({ username: '', email: '', password: '' })
    const [warningMessage, setWarningMessage] = useState({ usernameWarningMessage: undefined, emailWarningMessage: undefined, passwordWarningMessage: undefined })

    const { usernameWarningMessage, emailWarningMessage, passwordWarningMessage} = warningMessage || {}
    const { username, email, password } = registerInfo

    const handleOnChange = info => {
        setRegisterInfo({ ...registerInfo, ...info })
    }

    const validation = () => {
        let status = true
        const warningMessage = {}
        if (!username) {
            warningMessage.usernameWarningMessage = 'Username required'
            status = false
        } else {
            warningMessage.usernameWarningMessage = undefined
        }
        if (!email) {
            warningMessage.emailWarningMessage = 'Email required'
            status = false
        } else {
            warningMessage.emailWarningMessage = undefined
        }
        if (!password) {
            warningMessage.passwordWarningMessage = 'Password required'
            status = false
        } else {
            warningMessage.passwordWarningMessage = undefined
        }

        setWarningMessage(warningMessage)

        return status
    }

    const onClickSubmit = () => {
        const status = validation()
        if (status) {
            console.log('status===========-------------', status, registerInfo)
        }
    }

    return (
        <body class="h-100">
            <div class="authincation h-100">
                <div class="container h-100">
                    <div class="row justify-content-center h-100 align-items-center">
                        <div class="col-md-6">
                            
                            <div class="authincation-content">
                                <div class="row no-gutters">
                                    <div class="col-xl-12">
                                        <div class="auth-form">
                                            <div class="text-center mb-3">
                                                <a href="index.html"><img src="images/logo-full.png" alt="" /></a>
                                            </div>
                                            <h4 class="text-center mb-4 text-white">Sign up your account</h4>
                                            <div class="form-group">
                                                <label class="mb-1 text-white"><strong>Username</strong></label>
                                                <input type="text" class="form-control" placeholder="username" value={username} onChange={e => handleOnChange({ username: e.target.value })} />
                                                <ValidationTextComponent validationMessage={usernameWarningMessage} />
                                            </div>
                                            <div class="form-group">
                                                <label class="mb-1 text-white"><strong>Email</strong></label>
                                                <input type="email" class="form-control" placeholder="hello@example.com" value={email} onChange={e => handleOnChange({ email: e.target.value })} />
                                                <ValidationTextComponent validationMessage={emailWarningMessage} />
                                            </div>
                                            <div class="form-group">
                                                <label class="mb-1 text-white"><strong>Password</strong></label>
                                                <input type="password" class="form-control" placeholder="password" value={password} onChange={e => handleOnChange({ password: e.target.value })} />
                                                <ValidationTextComponent validationMessage={passwordWarningMessage} />
                                            </div>
                                            <div class="text-center mt-4">
                                                <Button className="btn bg-white text-primary btn-block" label="Sign Up" /* isLoading={isLoading} */ onClick={onClickSubmit} />
                                            </div>
                                            <div class="new-account mt-3">
                                                <p class="text-white">Already have an account? <a class="text-white" role="button" onClick={onClickSignIn}>Sign In</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default RegisterComponent
