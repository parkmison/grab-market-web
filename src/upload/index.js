import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import {
  Divider,
  Form,
  Input,
  required,
  message,
  InputNumber,
  Button,
} from "antd";
import "./index.css";

function UploadPage() {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Form name="상품 업로드" onFinish={onsubmit}></Form>
      <Form.Item
        name="upload"
        label={<div className="upload-label">상품 사진</div>}
      >
        <div id="upload-img-placeholder">
          <img src="/images/icons/camera.png" />
          <span>이미지를 업로드해주세요.</span>
        </div>
      </Form.Item>
      <Divider />
      <Form.Item
        label={<div className="upload-label">판매자 명</div>}
        name="seller"
        rules={[{ required: true, message: "판매자명을 입력해주세요." }]}
      >
        <Input
          className="upload-name"
          size="large"
          placeholder="판매자명을 입력해주세요."
        />
      </Form.Item>
      <Divider />
      <Form.Item
        name="name"
        label={<div className="upload-label">상품 이름</div>}
        rules={[{ required: true, message: "상품 이름을 입력해주세요." }]}
      >
        <Input
          className="upload-name"
          size="large"
          placeholder="상품 이름을 입력해주세요."
        />
      </Form.Item>
      <Divider />
      <Form.Item
        name="price"
        label={<div className="upload-price">상품 가격</div>}
        rules={[{ required: true, message: "상품 가격을 입력해주세요." }]}
      >
        <InputNumber defaultValue={0} className="upload-price" size="large" />
      </Form.Item>
      <Divider />
      <Form.Item
        name="description"
        label={<div className="upload-label">상품 소개</div>}
        rules={[{ required: true, message: "상품 소개를 입력해라." }]}
      >
        <Input.TextArea
          size="large"
          id="product-description"
          showCount
          maxLength={300}
          placeholder="상품 소개를 입력해라."
        />
      </Form.Item>
      <Form.Item>
        <Button id="submit-button" size="large" htmlType="submit">
          문제등록
        </Button>
      </Form.Item>
    </div>
  );
}

export default UploadPage;
