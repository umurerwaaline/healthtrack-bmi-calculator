"use client"
import { useState } from "react"

export default function BMICalculator() {
  const [unit, setUnit] = useState("metric")
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState(23.1)

  const calculateBMI = () => {
    const h = parseFloat(height)
    const w = parseFloat(weight)
    if (!h || !w) return
    const bmiVal = unit === "metric" ? w / (h / 100) ** 2 : (w / h ** 2) * 703
    setBmi(Math.round(bmiVal * 10) / 10)
  }

  const getStatus = (bmi) =>
    bmi < 18.5 ? "Underweight" : bmi < 25 ? "Healthy Weight" : bmi < 30 ? "Overweight" : "Obese"

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xl font-bold"> HealthTrack
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          {["Calculators", "Coaching", "Programs", "About Us"].map((item) => (
            <a key={item} href="#" className="hover:text-red-800">{item}</a>
          ))}
          <button className="bg-red-800 text-white px-5 py-2 rounded-md">Login</button>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-8 grid lg:grid-cols-2 gap-8">
        <section>
          <h1 className="text-3xl font-bold mb-2">
            HealthTrack <span className="text-red-800">BMI Calculator</span>
          </h1>
          <p className="text-gray-600 mb-8 text-sm">
            Calculate your Body Mass Index (BMI) to understand your health status and receive personalized wellness recommendations.
          </p>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-xs font-semibold text-gray-500 mb-3">SELECT MEASUREMENT SYSTEM</p>
            <div className="flex mb-6 border rounded-lg overflow-hidden">
              {["metric", "imperial"].map((u) => (
                <button
                  key={u}
                  onClick={() => setUnit(u)}
                  className={`flex-1 py-2 text-sm ${unit === u ? "bg-red-50 text-red-800 border-b-2 border-red-800" : "text-gray-500"}`}
                >
                  {u === "metric" ? "Metric (cm/kg)" : "Imperial (ft/in/lbs)"}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-sm font-medium">Height ({unit === "metric" ? "cm" : "in"})</label>
                <div className="relative mt-1">
                  <input
                    type="number"
                    placeholder="e.g. 180"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 text-sm"
                  />
                  <span className="absolute right-3 top-2 text-gray-400 text-sm">{unit === "metric" ? "cm" : "in"}</span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Weight ({unit === "metric" ? "kg" : "lbs"})</label>
                <div className="relative mt-1">
                  <input
                    type="number"
                    placeholder="e.g. 75"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 text-sm"
                  />
                  <span className="absolute right-3 top-2 text-gray-400 text-sm">{unit === "metric" ? "kg" : "lbs"}</span>
                </div>
              </div>
            </div>

            <button onClick={calculateBMI} className="w-full bg-red-800 text-white py-3 rounded-lg font-medium hover:bg-red-900">
              Calculate My BMI
            </button>

            {bmi && (
              <div className="mt-6 pt-6 border-t">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-gray-500 font-semibold mb-1">YOUR RESULT</p>
                    <p className="text-4xl font-bold">
                      {bmi} <span className="text-red-800 text-lg font-medium">{getStatus(bmi)}</span>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="relative rounded-2xl overflow-hidden min-h-[400px]">
          <img
            src="/body-measurement.jpg"
            alt="Young woman measuring body mass on scale"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 p-8 text-white">
            <span className="bg-red-800 text-xs px-3 py-1 rounded-full font-medium">PREMIUM COACHING</span>
            <h2 className="text-2xl font-bold mt-4 mb-2">Beyond numbers: Personalize your health journey.</h2>
            <p className="text-sm text-gray-200 mb-4">
              A healthy BMI is just the beginning. Our expert coaches help you optimize your metabolism, build muscle, and feel your best.
            </p>
            <button className="bg-white text-gray-900 px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
              Book a Discovery Call <span>→</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
