"use client";

import React from "react";
import Image from "next/image";

export default function ScienceExtension() {
  return (
    <section className="w-full py-16 bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 text-left space-y-12">
        <div>
          <h2 className="text-3xl font-bold text-[#1E293B] mb-4">The Science Behind Neuromodulation</h2>
          <p className="text-gray-700 text-lg">
            Neuromodulation represents a new frontier in drug-free inflammation control. By combining the precision of bioelectronic medicine with the safety of non-invasive ultrasound, this approach leverages the body's own neural circuitry to restore immune balance. This approach taps into the inflammatory reflex — a natural pathway that modulates cytokine release — without the use of systemic immunosuppressants or invasive implants.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-[#1E293B] mb-2">How It Works</h3>
          <Image src="/IniaWhole.png" alt="Whole-body diagram" width={800} height={600} className="my-4 rounded-md" />
          <p className="text-gray-700 text-base italic">
            "Focused ultrasound can be used to stimulate nerves in the spleen. This activates the body's natural inflammation reflex — a built-in neural circuit that tones down immune overactivation."
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-[#1E293B] mb-2">Zooming In: The Cellular Pathway</h3>
          <Image src="/IniaCellular.png" alt="Cellular mechanism" width={800} height={600} className="my-4 rounded-md" />
          <p className="text-gray-700 text-base italic">
            "Stimulation of the splenic nerve triggers norepinephrine release. T-cells respond by releasing acetylcholine, which binds to receptors on immune cells, reducing the release of inflammatory cytokines like TNF-α and IL-6."
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-[#1E293B] mb-2">The Brain-Body Connection</h3>
          <Image src="/IniaBrain.png" alt="Brain-body loop" width={800} height={600} className="my-4 rounded-md" />
          <p className="text-gray-700 text-base italic">
            "All of this is guided by a brain-body communication loop via the vagus nerve. This pathway creates a drug-free, precisely timed response to overactive immune signaling."
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-[#1E293B] mb-2">Evidence and Sources</h3>
          <p className="text-gray-700 text-base mb-4">
            Peer-reviewed studies have shown that neuromodulation via the vagus and splenic nerves can reduce cytokine production and improve outcomes in inflammatory diseases. Current research builds on this foundation with non-invasive, patient-friendly tech.
          </p>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
            <li>
              Borovikova LV et al. <i>Vagus nerve stimulation attenuates the systemic inflammatory response to endotoxin.</i> <a href="https://pubmed.ncbi.nlm.nih.gov/11517335" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">PubMed</a>
            </li>
            <li>
              Koopman FA et al. <i>Vagus nerve stimulation inhibits cytokine production in rheumatoid arthritis.</i> <a href="https://pubmed.ncbi.nlm.nih.gov/27535621" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">PubMed</a>
            </li>
            <li>
              Bonaz B et al. <i>Vagus nerve stimulation: from epilepsy to the microbiota-gut-brain axis.</i> <a href="https://pubmed.ncbi.nlm.nih.gov/33358636" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">PubMed</a>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow p-8 text-gray-500 text-base mt-12 text-center">
          <span className="italic">
            Check back soon for new research updates in bioelectronic medicine!
          </span>
        </div>
      </div>
    </section>
  );
}
