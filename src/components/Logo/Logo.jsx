import { MediaQuery } from '@mantine/core';
import React from 'react';

// eslint-disable-next-line react/prop-types
const Logo = ({ variant = 'default', width=40, height=40, ...others }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        version="1.1"
        viewBox="0 0 40 40"
        xmlSpace="preserve"
        {...others}
      >
        <g>
          <circle
            cx="20.06"
            cy="19.926"
            r="19.381"
            fill={variant === 'white' || variant === 'default' ? '#085796' : '#FFF'}
            fillOpacity="1"
            fillRule="evenodd"
            strokeWidth="0.049"
          ></circle>
        </g>
        <g transform="matrix(1.33333 0 0 -1.33333 0 816)">
          <g transform="matrix(.04812 0 0 .04812 15.045 593.445)">
            <path
              fill={variant === 'white' || variant === 'default' ? '#FFF' : '#bcbec0'}
              fillOpacity="1"
              fillRule="nonzero"
              stroke="none"
              d="M0 0c-86.271 0-156.208 69.936-156.208 156.206 0 86.271 69.937 156.207 156.208 156.207s156.206-69.936 156.206-156.207C156.206 69.936 86.271 0 0 0m0 332.785c-97.522 0-176.579-79.057-176.579-176.579S-97.522-20.373 0-20.373c97.521 0 176.579 79.057 176.579 176.579S97.521 332.785 0 332.785"
            ></path>
          </g>
          <g transform="matrix(.02032 0 0 .02032 15.045 585.065)">
            <g>
              <path
                fill={variant === 'white' || variant === 'default' ? '#FFF' : '#bcbec0'}
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-86.271 0-156.208 69.936-156.208 156.206 0 86.271 69.937 156.207 156.208 156.207s156.206-69.936 156.206-156.207C156.206 69.936 86.271 0 0 0m0 332.785c-97.522 0-176.579-79.057-176.579-176.579S-97.522-20.373 0-20.373c97.521 0 176.579 79.057 176.579 176.579S97.521 332.785 0 332.785"
              ></path>
            </g>
          </g>
          <path
            fill={variant === 'white' || variant === 'default' ? '#FFF' : '#1b75bc'}
            fillOpacity="1"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="0.048"
            d="M15.045 596.104a4.858 4.858 0 100 9.717 4.858 4.858 0 000-9.717m0 10.699a5.84 5.84 0 110-11.681 5.84 5.84 0 010 11.68"
          ></path>
          <g transform="matrix(.04812 0 0 .04812 19.484 600.962)">
            <path
              fill={variant === 'white' || variant === 'default' ? '#FFF' : '#1b75bc'}
              fillOpacity="1"
              fillRule="nonzero"
              stroke="none"
              d="M0 0c0-50.94-41.295-92.236-92.235-92.236-50.941 0-92.237 41.296-92.237 92.236 0 50.94 41.296 92.236 92.237 92.236C-41.295 92.236 0 50.94 0 0"
            ></path>
          </g>
        </g>
      </svg>

      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="180"
          height="40"
          version="1.1"
          viewBox="0 0 47.624994 10.583333"
        >
          <g
            fill={variant === 'white' || variant === 'default' ? '#000' : '#FFF'}
            fillOpacity="1"
            stroke="none"
            fontFamily="Avenir Next"
            fontSize="8.114"
            fontStretch="normal"
            fontStyle="normal"
            fontVariant="normal"
          >
            <text
              xmlSpace="preserve"
              style={{
                lineHeight: "1.15",
                InkscapeFontSpecification: "'Avenir Next, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              x="-0.75"
              y="8.173"
              strokeWidth="0.315"
              fontWeight="normal"
            >
              <tspan
                style={{
                  InkscapeFontSpecification: "'Avenir Next, Normal'",
                  fontVariantLigatures: "normal",
                  fontVariantCaps: "normal",
                  fontVariantNumeric: "normal",
                  fontVariantEastAsian: "normal",
                }}
                x="-0.75"
                y="8.173"
                strokeWidth="0.315"
                fontFamily="Avenir Next"
                fontSize="8.114"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="normal"
              >
                Eyano
              </tspan>
            </text>
          </g>
          <g
            fill={variant === 'white' || variant === 'default' ? '#085796' : '#085796'}
            fillOpacity="1"
            stroke="none"
            fontFamily="Avenir Next"
            fontSize="8.114"
            fontStretch="normal"
            fontStyle="normal"
            fontVariant="normal"
          >
            <text
              xmlSpace="preserve"
              style={{
                lineHeight: "1.25",
                InkscapeFontSpecification: "'Avenir Next, Semi-Bold'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              x="21.151"
              y="8.408"
              strokeWidth="0.265"
              fontWeight="600"
            >
              <tspan
                style={{
                  InkscapeFontSpecification: "'Avenir Next, Semi-Bold'",
                  fontVariantLigatures: "normal",
                  fontVariantCaps: "normal",
                  fontVariantNumeric: "normal",
                  fontVariantEastAsian: "normal",
                }}
                x="21.151"
                y="8.408"
                strokeWidth="0.265"
                fontFamily="Avenir Next"
                fontSize="8.114"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="600"
              >
                App
              </tspan>
            </text>
          </g>
        </svg>
      </MediaQuery>
    </>
  )
}

export default Logo;