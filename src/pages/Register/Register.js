import React, { useEffect } from "react"
import axios from "axios"
import "./Register.css"
import Header from "../../components/Header"

const postUser = async (data) => {
    const response = await axios.post(
        `http://localhost:3001/routes/users`,
        data
    )
    return response.data
}

const Register = ({ location, history }) => {
    // const [image, setImage] = useState(null)

    useEffect(() => {
        const uid = location.hash.substring(1, location.hash.length)
        localStorage.setItem("uid", uid)
    }, [])

    // const handleFileInput = (e) => {
    //     setImage(e.target.files[0])
    //     const profileImage = document.getElementById("profile-image")
    //     profileImage.src = e.target.files[0]
    // }

    // const handlePost = async () => {
    //     const formData = new FormData()
    //     formData.append("imageUrl", image)

    //     axios
    //         .post("/routes/users/upload", formData)
    //         .then((res) => {
    //             alert("회원가입에 성공하셨습니다.")
    //             const postData = {
    //                 uid: localStorage.getItem("uid"),
    //                 userName: document.getElementById("input-user-name").value,
    //                 imageUrl: res.fileName,
    //             }
    //             const result = postUser(postData)
    //             return result
    //         })
    //         .catch((err) => {
    //             alert("회원가입에 실패하셨습니다.")
    //             return { error: true }
    //         })
    // }

    const onClickSuccess = () => {
        if (
            !localStorage.getItem("uid") ||
            !document.getElementById("input-user-name").value
        ) {
            alert("값을 입력해주세요.")
            return { error: true }
        }
        const postData = {
            uid: localStorage.getItem("uid"),
            userName: document.getElementById("input-user-name").value,
            imageUrl:
                "https://p7.hiclipart.com/preview/355/848/997/computer-icons-user-profile-google-account-photos-icon-account.jpg",
        }
        postUser(postData)
            .then((res) => {
                alert("회원가입에 성공하셨습니다.")
                history.push("/")
                return res
            })
            .catch((err) => {
                console.log(err)
                alert("회원가입에 실패하셨습니다.")
                return { error: true }
            })
    }

    return (
        <div>
            <Header
                type="Register"
                history={history}
                onClick={onClickSuccess}
            />
            <div className="container-register">
                <div className="text-info">
                    서비스를 위한 <span className="text-info-accent">정보</span>
                    를 <br />
                    입력해주세요.
                </div>
                <div className="container-register-content">
                    <label for="image-url">
                        <img
                            id="profile-image"
                            className="profile-image"
                            alt="User Profile"
                            style={{
                                backgroundImage: `url("https://p7.hiclipart.com/preview/355/848/997/computer-icons-user-profile-google-account-photos-icon-account.jpg")`,
                            }}
                        />
                    </label>

                    <input
                        id="image-url"
                        type="file"
                        // onChange={(e) => handleFileInput(e)}
                        style={{
                            display: "none",
                        }}
                    />

                    <div className="container-register-content-name">
                        <input
                            className="input-name"
                            placeholder="이름을 입력해주세요."
                            id="input-user-name"
                        ></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
