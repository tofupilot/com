"use client"

import { CheckIcon, ClipboardDocumentIcon } from "@heroicons/react/16/solid"
import React from "react"
import { Button } from "../../catalyst/button"

export default function CopyToClipboard({ code }: { code: string }) {
  const [copied, setCopied] = React.useState(false)
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
    } catch (error) {
      console.error("Error copying to clipboard", error)
    } finally {
      setTimeout(() => {
        setCopied(false)
      }, 1500)
    }
  }

  return (
    <Button
      onClick={copyToClipboard}
      plain
      >
      {!copied ? (
        <ClipboardDocumentIcon/>
      ) : (
        <CheckIcon/>
      )}
    </Button>
  )
}
