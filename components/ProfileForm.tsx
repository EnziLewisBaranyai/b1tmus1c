// components/ProfileForm.tsx

import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

interface ProfileFormData {
  username: string;
  email: string;
  full_name: string;
  bio: string;
}

const ProfileForm: React.FC = () => {
  const { register, handleSubmit } = useForm<ProfileFormData>();

  const onSubmit = async (data: ProfileFormData) => {
    try {
      const response = await axios.post('/api/profile', data);
      console.log('Profile saved:', response.data);
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" name="username" ref={register} />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" ref={register} />
      </Form.Group>
      <Form.Group controlId="full_name">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" name="full_name" ref={register} />
      </Form.Group>
      <Form.Group controlId="bio">
        <Form.Label>Bio</Form.Label>
        <Form.Control as="textarea" name="bio" ref={register} />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default ProfileForm;
