// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { wordcountToPricing, deliveryToPricing, subtotalPricing, calculateSavings } from 'libs/utils';

import { LoaderButton } from 'modules/LoaderButton';
import './Order.css';

export default function Configuration(props: any) {

  const [selectedWordcount, setSelectedWordcount] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function validateForm() {
    return (props.wordcount && props.delivery);
  }

  if (props.currentStep !== 1) {
    return null
  }

  function renderPrices() {
    const wordcounts = [100, 200, 300, 500, 1000, 2000, 3000, 5000, 10000]
    return wordcounts.map((wordcount, index) =>
      <div className="row mt-2" key={index}>
        <div className="col-12">
          <div style={{ width: '100%' }} className="input-radio input-radio--innerlabel">
            <input
              id={`wordcount-${wordcount}`}
              type="radio" name="wordcount"
              value={wordcount}
              onChange={e=>setSelectedWordcount(e.target.value)}
              checked={Number(selectedWordcount)===Number(wordcount)}/>
            <label htmlFor={`wordcount-${wordcount}`}>
              <div className="row">
                <div className="col-4 text-left">
                  {wordcount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </div>
                <div className="col-4">
                  ${Number(wordcountToPricing(wordcount)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </div>
                <div className="col-4 text-right">
                  Save {calculateSavings(wordcount)}%
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    );
  }

  function renderSavings(pricing: number) {
    const oldPrice = Number(subtotalPricing(props.wordcount, 24)).toFixed(2);
    const deliveryDiscount = Number(deliveryToPricing(props.wordcount, pricing)).toFixed(2);
    const newPrice = (+oldPrice + +deliveryDiscount).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return (
      <div>
        <span><span style={{ textDecoration: 'line-through' }}>${oldPrice}</span> ${newPrice}</span>
      </div>
    )
  }

  return (
    <div className="row justify-content-around">
      <div className="col-md-6 col-lg-5">
        <div>
          <h2>On-demand editing by real humans (not bots)</h2>
          <p className="lead">
            Edit Mule is the fastest and easiest way to get documents professionally proofread and copyedited. Write flawlessly and project your brand in the best light, guaranteed.
          </p>
        </div>
        <hr className="short" />
        <div className="boxed boxed--lg boxed--border hidden-xs feature-large">
          <div className="feature feature-2"><img className="icon--svg" width="42" height="42" alt="Header" src="/icons/Hour.svg"></img>
            <div className="feature__body">
              <h5>Delivery Within 24 Hours</h5>
              <p>We'll get your document back to you in as little as 24 hours, guaranteed.</p>
            </div>
          </div>
          <div className="feature feature-2"><img className="icon--svg" width="42" height="42" alt="Header" src="/icons/Cloud-Secure.svg"></img>
            <div className="feature__body">
              <h5>Secure and Confidential</h5>
              <p>All work is protected under NDA and 256-bit encryption by default.</p>
            </div>
          </div>
          <div className="feature feature-2"><img className="icon--svg" width="42" height="42" alt="Header" src="/icons/File-Refresh-Blue.svg"></img>
            <div className="feature__body">
              <h5>Unlimited Revisions</h5>
              <p>Made some changes? Send it back for free as many times as you need.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-5">
        <div className="boxed boxed--border">
          <div onChange={e => props.setWordcount(parseInt(((e.target as HTMLTextAreaElement).value), 10))}>
            <div className="row">
              <div className="col-12">
                <h3>Select word count</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div style={{ width: '100%' }} className="input-radio input-radio--innerlabel">
                  <input id="wordcount-50" required type="radio" name="wordcount" value={50} />
                  <label htmlFor="wordcount-50">
                    <div className="row">
                      <div className="col-4 text-left">
                        50
                      </div>
                      <div className="col-4">
                        ${Number(wordcountToPricing(50)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </div>
                      <div className="col-4 text-right">
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            {renderPrices()}
            <div className="row">
              <div className="col-12 mt-2">
                <div className="col-12 text-left validate-required">
                  <input className="validate-required" onClick={e=>setSelectedWordcount(null)} id="wordcount-custom" type="text" name="wordcount" placeholder="Custom wordcount" />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div onChange={e => props.setDelivery((e.target as HTMLTextAreaElement).value)}>
            <div className="row">
              <div className="col-12">
                <h3>Select guaranteed delivery</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div style={{ width: '100%' }} className="input-radio input-radio--innerlabel">
                  <input id="delivery-24" defaultChecked required type="radio" name="delivery" value={24} />
                  <label htmlFor="delivery-24">
                    <div className="row">
                      <div className="col-4 text-left">
                        24 hours
                      </div>
                      <div className="col-8 text-right">
                        {(props.wordcount >= 1) && '$' + (Number(subtotalPricing(props.wordcount, 24)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))}
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mt-2">
                <div style={{ width: '100%' }} className="input-radio input-radio--innerlabel">
                  <input id="delivery-48" required type="radio" name="delivery" value={48} />
                  <label htmlFor="delivery-48">
                    <div className="row">
                      <div className="col-4 text-left">
                        48 hours
                      </div>
                      <div className="col-8 text-right">
                        {(props.wordcount >= 1) && renderSavings(48)}
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mt-2">
                <div style={{ width: '100%' }} className="input-radio input-radio--innerlabel">
                  <input id="delivery-72" required type="radio" name="delivery" value={72} />
                  <label htmlFor="delivery-72">
                    <div className="row">
                      <div className="col-4 text-left">
                        72 hours
                      </div>
                      <div className="col-8 text-right">
                        {(props.wordcount >= 1) && renderSavings(72)}
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <br />
          <LoaderButton
            size="lg"
            variant="primary"
            className="btn btn--primary type--uppercase"
            text="Continue"
            onClick={e => props.setCurrentStep(2)}
            disabled={!validateForm()}
          />
        </div>
      </div>
    </div >
  );
}
