export const CountrySelectorDummy = () => (
  <>
    <div className="fixed bottom-[48px] left-[48px]">
      <div className="flex items-center ">
        <span className="h-[24px] w-[8ch]">COUNTRY:</span>
        <div className="[&_select]:z-2 relative ml-2.5 rounded-[--buttonRadius] bg-ffern-sand-100 [&_select]:h-[29px] [&_select]:cursor-pointer [&_select]:appearance-none [&_select]:rounded-[--buttonRadius] [&_select]:border-none [&_select]:bg-transparent [&_select]:px-[25px] [&_select]:py-0 [&_select]:text-base [&_select]:text-[#98512b] [&_select]:outline-none">
          <div className="pointer-events-none absolute left-[4px] top-[8.5px] w-[24px] p-[2px] pr-[8px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342">
              <g fill="#FFF">
                <path d="M0 0h513v341.3H0V0z"></path>
                <path d="M311.7 230 513 341.3v-31.5L369.3 230h-57.6zM200.3 111.3 0 0v31.5l143.7 79.8h56.6z"></path>
              </g>
              <path
                d="M393.8 230 513 295.7V230H393.8zm-82.1 0L513 341.3v-31.5L369.3 230h-57.6zm146.9 111.3-147-81.7v81.7h147zM90.3 230 0 280.2V230h90.3zm110 14.2v97.2H25.5l174.8-97.2zm-82.1-132.9L0 45.6v65.7h118.2zm82.1 0L0 0v31.5l143.7 79.8h56.6zM53.4 0l147 81.7V0h-147zm368.3 111.3L513 61.1v50.2h-91.3zm-110-14.2V0h174.9L311.7 97.1z"
                fill="#0052B4"
              ></path>
              <g fill="#D80027">
                <path d="M288 0h-64v138.7H0v64h224v138.7h64V202.7h224v-64H288V0z"></path>
                <path d="M311.7 230 513 341.3v-31.5L369.3 230h-57.6zm-168 0L0 309.9v31.5L200.3 230h-56.6zm56.6-118.7L0 0v31.5l143.7 79.8h56.6zm168 0L513 31.5V0L311.7 111.3h56.6z"></path>
              </g>
            </svg>
          </div>
          <select className="w-full">
            <option label="GB" value="GB">
              United Kingdom
            </option>
            <option label="US" value="US">
              United States
            </option>
            <option label="AT" value="AT">
              Austria
            </option>
            <option label="BE" value="BE">
              Belgium
            </option>
            <option label="CA" value="CA">
              Canada
            </option>
            <option label="DK" value="DK">
              Denmark
            </option>
            <option label="FI" value="FI">
              Finland
            </option>
            <option label="DE" value="DE">
              Germany
            </option>
            <option label="NL" value="NL">
              Netherlands
            </option>
            <option label="IE" value="IE">
              Ireland
            </option>
            <option label="IT" value="IT">
              Italy
            </option>
            <option label="LU" value="LU">
              Luxembourg
            </option>
            <option label="ES" value="ES">
              Spain
            </option>
            <option label="SE" value="SE">
              Sweden
            </option>
          </select>
          <div className="pointer-events-none absolute right-[20px] top-[10px]">
            <svg
              width="12px"
              height="12px"
              viewBox="0 0 100 100"
              version="1.1"
              className="r-0 t-0 absolute"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#98512b"
            >
              <g
                id="Symbols"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <g id="downArrow" stroke="#98512b" stroke-width="7.16814159">
                  <g id="downArrow" transform="translate(5.000000, 27.000000)">
                    <polyline id="Path" points="0 0 44.9438955 44.8644893 89.8877909 0"></polyline>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="ml-2.5 inline-block h-[25px] rounded-[var(--buttonRadius)] bg-ffern-sand-400 px-1.5 pt-0.5 text-[0.9rem] text-white">
          <span className="flex w-[1ch] items-center justify-center">£</span>
        </div>
      </div>
    </div>
  </>
)
