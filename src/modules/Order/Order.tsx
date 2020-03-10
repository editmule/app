import React, { useRef, useState } from 'react';
import { API } from 'aws-amplify';
import { s3Upload } from 'libs/aws';

import './Order.css';
import Configuration from './Configuration';
import Upload from './Upload';

export default function Order(props: any) {
  const file = useRef(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [content, setContent] = useState("");
  const [wordcount, setWordcount] = useState("");
  const [delivery, setDelivery] = useState(24);
  const [isLoading, setIsLoading] = useState(false);

  // TODO: Add billing to order (only submit order when billing works)
  async function handleOrderSubmit(event: any) {
    event.preventDefault();

    // @ts-ignore
    if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
      // @ts-ignore
      alert(`Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
        1000000} MB.`
      );
      return;
    }

    setIsLoading(true);

    alert('adding to cart');

    props.history.push('/cart');

    // try {
    //   const attachment = file.current
    //     ? await s3Upload(file.current)
    //     : null;
    //   // await createOrder({ content, attachment });
    //   props.history.push("/account/orders");
    // } catch (e) {
    //   alert(e);
    //   setIsLoading(false);
    // }
  }

  return (
    <div>
      <form onSubmit={handleOrderSubmit}>
        <Configuration
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          wordcount={wordcount}
          setWordcount={setWordcount}
          delivery={delivery}
          setDelivery={setDelivery}
        />
        <Upload
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          content={content}
          setContent={setContent}
          file={file}
          props={props}
        />
      </form>
    </div>
  );
}

// <Checkout
//   currentStep={currentStep}
//   setCurrentStep={setCurrentStep}
//   wordcount={wordcount}
//   delivery={delivery}
//   isLoading={isLoading}
//   onSubmit={handleOrderSubmit}
//   config={config}
// />
