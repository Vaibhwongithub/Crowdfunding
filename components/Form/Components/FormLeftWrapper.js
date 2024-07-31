import styled from 'styled-components';
import { FormState } from '../Form';
import { useContext } from 'react';

const FormLeftWrapper = () => {
  const Handler = useContext(FormState);

  return (
    <FormLeft>
      <FormInput>
        <label>Campaign Title</label>
        <Input onChange={Handler.FormHandler} value={Handler.form.campaignTitle} placeholder='Campaign Title' name='campaignTitle'>
        </Input>
      </FormInput>
      <FormInput>
        <label>Story</label>
        <TextArea onChange={Handler.FormHandler} value={Handler.form.story} name="story" placeholder='Describe Your Story'>
        </TextArea>
      </FormInput>
    </FormLeft>
  )
}

const FormLeft = styled.div`
  width: 45%;
`

const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const Input = styled.input`
  padding: 15px;
  background-color: ${(props) => props.theme.bgDiv};
  color: ${(props) => props.theme.color};
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: 16px;
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 15px;
  background-color: ${(props) => props.theme.bgDiv};
  color: ${(props) => props.theme.color};
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: 16px;
  min-height: 160px;
  resize: vertical;
  width: 100%;
`;

export default FormLeftWrapper;
