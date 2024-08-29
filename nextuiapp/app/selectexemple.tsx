"use client";
import React from 'react';
import {LockIcon} from './LockIcon.jsx';
import { NextUIProvider, Select, SelectItem , Input, Button, Spacer} from '@nextui-org/react';

import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";

const SelectExample = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <NextUIProvider>
      <div className="flex gap-4 items-center flex-col" style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
        <Select
          label="Choose an account"
          placeholder="Select an account"
        >
          <SelectItem key="1" value="option1">
            Johnny
          </SelectItem>
          <SelectItem key="2" value="option2">
            Frank
          </SelectItem>
          <SelectItem key="3" value="option3">
            Roger
          </SelectItem>
        </Select>

        <Input
          label="Master Password"
          variant="bordered"
          placeholder="Enter your password"
          //isInvalid={true}
          //errorMessage="Please enter a password"
          endContent={
            <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
        />

        <Spacer y={2} />

        <Button
            color="primary"
            className="w-2/5"
            >
              Connexion
          </Button>

      </div>
      
    </NextUIProvider>
  );
};

export default SelectExample;