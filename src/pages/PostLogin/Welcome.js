import React from 'react';
export default function Welcome() {
  return (
    <div>
      <h1>Welcome</h1>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          <h1>Welcome bonus 200%</h1>

          <div>Deposit 100 TRY</div>
          <button>Activate</button>
        </div>
        <div>
          <h1>Get 200% for your first deposit right now!</h1>
          <p>
            Activate your bonus,make a minimum deposit of 100 TRY and get a 200%
            bonus to your first deposit.The minimum but for bonus wagering is
            10TRY.
          </p>
          <button>Deposit with no bonus</button>
          <button>Go on with bous</button>
        </div>
      </div>
    </div>
  );
}
