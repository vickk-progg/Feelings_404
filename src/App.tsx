import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Shield, Award, Send, RefreshCw, User, Clock } from 'lucide-react';

interface TherapySession {
  id: number;
  category: string;
  userProblem: string;
  terribleResponse: string;
  followUpInsult: string;
}

const therapySessions: TherapySession[] = [
  {
    id: 1,
    category: "Anxiety & Panic Disorders",
    userProblem: "I've been having panic attacks and I can't sleep at night. My heart races and I feel like I'm dying...",
    terribleResponse: "Well, this is quite fascinating from a clinical perspective. What you're describing sounds like a textbook case of someone who has fundamentally failed to develop basic coping mechanisms that most people master in childhood. The fact that you're experiencing panic attacks suggests a profound weakness in your psychological constitution that frankly, is quite concerning. You see, panic attacks are essentially your mind's way of telling you that you're not equipped to handle even the most basic stresses of adult life. While other people face challenges head-on with resilience and maturity, you've somehow managed to train your brain to catastrophize every minor inconvenience into a life-threatening emergency. This level of emotional fragility is typically seen in individuals who have been coddled their entire lives and never learned to face reality. The sleep issues you're experiencing are likely your subconscious mind's way of avoiding the harsh truth that you're simply not cut out for the demands of modern society. Most successful people use stress as fuel for achievement, but you've managed to turn it into a debilitating condition that renders you completely useless. It's almost impressive how thoroughly you've sabotaged your own mental health through years of poor choices and weak thinking patterns.",
    followUpInsult: "I have to say, in my years of practice, I've rarely encountered someone who has managed to make such a simple biological response into such a dramatic performance. Your ancestors survived wars, famines, and actual life-threatening situations without having 'panic attacks' about their daily responsibilities. Perhaps it's time to consider that you might just be fundamentally incompatible with the basic requirements of human existence."
  },
  {
    id: 2,
    category: "Depression & Mood Disorders",
    userProblem: "I feel empty inside and nothing brings me joy anymore. I can barely get out of bed most days...",
    terribleResponse: "What you're describing is a classic case of someone who has completely given up on personal responsibility and decided to blame their circumstances on a 'chemical imbalance' rather than face the uncomfortable truth about their life choices. Depression, as you call it, is really just your mind's way of protecting you from acknowledging how thoroughly you've wasted your potential and disappointed everyone who ever believed in you. The emptiness you feel isn't a medical condition - it's the natural consequence of living a meaningless, unproductive life devoid of purpose or achievement. While other people your age are building careers, relationships, and contributing to society, you've chosen to retreat into this self-indulgent wallowing that you've convinced yourself is beyond your control. The inability to get out of bed isn't a symptom of depression; it's a symptom of being a fundamentally lazy person who has found a socially acceptable excuse for their complete lack of motivation. You've essentially trained yourself to be helpless because it's easier than facing the monumental effort required to fix the mess you've made of your existence. The fact that nothing brings you joy anymore should tell you something profound about the quality of person you've become - you've managed to drain the life out of everything around you through your toxic negativity and victim mentality.",
    followUpInsult: "I find it particularly telling that you frame this as something that's happening TO you rather than something you're actively choosing every single day. Your depression is really just a reflection of your deep, subconscious awareness that you've become exactly the kind of person that even you wouldn't want to be around."
  },
  {
    id: 3,
    category: "Relationship & Intimacy Issues",
    userProblem: "My partner cheated on me and left me for someone else. I don't know how to trust anyone again...",
    terribleResponse: "This is absolutely fascinating from a psychological standpoint, and I think we need to examine the deeper patterns at play here. The fact that your partner chose to cheat on you and ultimately leave you for someone else speaks volumes about what kind of partner you were and, more fundamentally, what kind of person you are. Infidelity rarely happens in a vacuum - it's typically the result of one partner becoming so insufferable, so emotionally draining, or so fundamentally unattractive (physically, emotionally, or intellectually) that their significant other feels compelled to seek fulfillment elsewhere. Your partner didn't just wake up one day and decide to betray you; they gradually realized that being with you was making them miserable and that literally anyone else would be an improvement. The trust issues you're experiencing now are actually quite ironic, because the real question isn't whether you can trust others - it's whether anyone should trust you to be a worthwhile partner. You've clearly demonstrated that you lack the self-awareness to recognize your own shortcomings, the emotional intelligence to maintain a healthy relationship, and the basic attractiveness (in every sense of the word) to keep someone interested in you long-term. The fact that they found someone better so quickly suggests that replacing you wasn't particularly difficult, which should give you some insight into your actual value in the relationship marketplace.",
    followUpInsult: "What's particularly sad is that you're focusing on trust issues when the real issue is that you've been given clear feedback about your worth as a partner, and instead of using this as an opportunity for self-improvement, you're choosing to play the victim. Your ex-partner is probably telling their new relationship about what a bullet they dodged."
  },
  {
    id: 4,
    category: "Self-Esteem & Body Image",
    userProblem: "I hate how I look and feel worthless compared to everyone else. I avoid mirrors and social situations...",
    terribleResponse: "Your self-perception issues are quite revealing, and I think it's important that we address the elephant in the room here. The fact that you hate how you look suggests that you have a fairly accurate assessment of your physical appearance, which is actually more self-awareness than most people in your situation possess. Society has conditioned us to believe that everyone is beautiful in their own way, but the harsh reality is that some people simply drew the short straw genetically, and it appears you're one of them. Your avoidance of mirrors and social situations indicates that you've correctly identified that your presence makes others uncomfortable, which shows a level of social awareness that's actually quite mature. The feelings of worthlessness you're experiencing aren't a distortion of reality - they're your subconscious mind's accurate assessment of your place in the social hierarchy. While attractive, confident people navigate the world with ease and are welcomed in social situations, you've correctly identified that you don't possess these advantages and have adapted by removing yourself from situations where your deficiencies would be highlighted. The comparison to others that you mention is particularly insightful because it demonstrates that you understand exactly where you stand relative to people who are actually desirable and valuable. This level of self-awareness, while painful, is actually quite rare and suggests that you have a clearer understanding of reality than most people who delude themselves about their attractiveness or worth.",
    followUpInsult: "What I find most interesting is that you seem surprised by these feelings, as if you expected to feel good about yourself despite having so little to feel good about. Your instinct to avoid social situations is actually quite considerate - you're sparing others from having to pretend they enjoy your company."
  },
  {
    id: 5,
    category: "Career & Professional Development",
    userProblem: "I keep getting rejected from jobs and feel like a complete failure. I'm starting to think I'm just not good enough...",
    terribleResponse: "Your employment struggles are actually quite illuminating and provide us with valuable data about your capabilities and market value. The consistent pattern of rejection you're experiencing isn't bad luck or a tough job market - it's the employment system working exactly as it should, efficiently filtering out candidates who don't meet the basic standards of competence and professionalism. Employers have become quite sophisticated at identifying individuals who would be liabilities rather than assets, and your repeated rejections suggest that you're consistently failing to demonstrate even the minimum qualifications for the positions you're pursuing. This pattern indicates several concerning possibilities: either you're dramatically overestimating your abilities and applying for positions far above your skill level, or you're accurately assessing your capabilities but those capabilities are simply insufficient for today's competitive marketplace. The feeling that you're 'not good enough' isn't imposter syndrome or low self-esteem - it's your rational mind correctly processing the feedback you're receiving from the professional world. While successful people are getting multiple offers and advancing in their careers, you're being systematically rejected by employers who can quickly identify that you lack the intelligence, skills, work ethic, or personality traits necessary for professional success. Your failure to secure employment despite presumably multiple attempts suggests a fundamental mismatch between your self-perception and your actual value as an employee.",
    followUpInsult: "What's particularly concerning is that you seem to be just now realizing that you might not be good enough, which suggests a profound lack of self-awareness that probably contributed to your unemployability in the first place. Most people figure out their limitations much earlier in life and adjust their expectations accordingly."
  },
  {
    id: 6,
    category: "Family Dynamics & Communication",
    userProblem: "My family constantly criticizes me and makes me feel like I can never do anything right. We fight all the time...",
    terribleResponse: "Family dynamics are particularly revealing because family members, unlike friends or colleagues, are essentially stuck with you and therefore have less incentive to be diplomatically dishonest about your shortcomings. The constant criticism you're receiving from your family is actually quite valuable feedback that you should be taking seriously rather than dismissing as unfair treatment. Families typically develop these patterns of criticism when one member consistently demonstrates poor judgment, irresponsible behavior, or character flaws that negatively impact the entire family unit. The fact that multiple family members are criticizing you suggests that the problem isn't their unrealistic expectations or poor communication skills - it's that you've established yourself as the family disappointment through a consistent pattern of bad decisions and failures. Family members who fight with you constantly aren't doing so because they enjoy conflict; they're expressing their frustration with having to deal with the consequences of your poor choices and the embarrassment of being associated with someone who can't meet basic standards of adult behavior. The feeling that you 'can never do anything right' is particularly telling because it suggests that you've been given multiple opportunities to prove yourself and have consistently failed to meet even the most basic expectations. Your family's criticism is actually a form of tough love - they're hoping that by pointing out your obvious flaws and failures, they might motivate you to finally take responsibility for your life and stop being such a burden on everyone around you.",
    followUpInsult: "What's most revealing is that you're framing this as something your family is doing TO you, rather than recognizing it as their natural response to who you've chosen to become. They probably discuss how much more peaceful and successful their lives would be if they didn't have to constantly worry about or clean up after your mistakes."
  }
];

const App: React.FC = () => {
  const [currentSession, setCurrentSession] = useState<TherapySession>(therapySessions[0]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [showFollowUp, setShowFollowUp] = useState(false);
  const [sessionCount, setSessionCount] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const startSession = () => {
    if (userInput.trim()) {
      setIsAnalyzing(true);
      setShowResponse(false);
      setShowFollowUp(false);
      
      setTimeout(() => {
        setShowResponse(true);
        setSessionCount(prev => prev + 1);
        setIsTyping(true);
      }, 3000);

      setTimeout(() => {
        setIsTyping(false);
        setShowFollowUp(true);
      }, 8000);

      setTimeout(() => {
        setIsAnalyzing(false);
      }, 9000);
    } else {
      setIsAnalyzing(true);
      setShowResponse(false);
      setShowFollowUp(false);
      
      setTimeout(() => {
        setShowResponse(true);
        setSessionCount(prev => prev + 1);
        setIsTyping(true);
      }, 3000);

      setTimeout(() => {
        setIsTyping(false);
        setShowFollowUp(true);
      }, 8000);

      setTimeout(() => {
        setIsAnalyzing(false);
      }, 9000);
    }
  };

  const getNewScenario = () => {
    const randomIndex = Math.floor(Math.random() * therapySessions.length);
    setCurrentSession(therapySessions[randomIndex]);
    setShowResponse(false);
    setShowFollowUp(false);
    setIsAnalyzing(false);
    setUserInput('');
  };

  const genericResponses = [
    "After careful analysis of your situation, I must say this presents a fascinating case study in self-sabotage and poor decision-making. What you're describing is essentially a textbook example of someone who has systematically failed to develop the basic life skills that most functional adults possess. The patterns you're exhibiting suggest a profound inability to take responsibility for your circumstances, instead choosing to externalize blame rather than confront the uncomfortable reality that you are the common denominator in all of your problems. Your situation reminds me of countless other patients who have come through my practice, all convinced that life is happening TO them rather than recognizing that they are actively creating their own misery through consistently poor choices and a victim mentality that prevents any real growth or change. What's particularly concerning is the level of self-deception required to maintain this narrative where you're somehow the innocent party in a series of unfortunate events, when the evidence clearly suggests that you lack the emotional intelligence, practical skills, and basic competence required to navigate adult life successfully.",
    "This is quite revealing from a psychological perspective, and I think we need to examine what this situation tells us about your fundamental character and capabilities. The circumstances you've described are typically the result of years of poor judgment, lack of self-awareness, and an inability to learn from previous mistakes. What strikes me most about your account is the complete absence of any acknowledgment of your role in creating these problems, which suggests a level of psychological immaturity that's quite concerning for someone your age. Most people develop the capacity for self-reflection and personal responsibility during adolescence, but you seem to have missed this crucial developmental milestone entirely. Your situation is actually quite predictable when we consider the type of person who consistently makes the kinds of choices that lead to these outcomes. The fact that you're seeking help now, rather than taking proactive steps to address these issues before they became overwhelming, demonstrates a reactive rather than proactive approach to life that probably contributed significantly to your current predicament.",
    "I find your situation particularly interesting because it represents such a clear example of how someone can systematically destroy their own life through a combination of poor choices, weak character, and an inability to face reality. What you're describing isn't a series of unfortunate events or bad luck - it's the natural and predictable consequence of being the type of person who consistently chooses the easy path over the right path, who avoids responsibility rather than embracing it, and who blames external circumstances rather than looking inward for solutions. The level of self-deception required to maintain your current worldview is actually quite impressive in its thoroughness. You've managed to construct an entire narrative where you're the victim of circumstances beyond your control, when anyone with basic observational skills can see that you're simply reaping what you've sown through years of irresponsible behavior and poor decision-making."
  ];

  const genericFollowUps = [
    "What I find most troubling about your case is that you seem genuinely surprised by these outcomes, which suggests a profound disconnect from reality that goes beyond simple denial into the realm of delusional thinking. Most people in your situation would have recognized these patterns much earlier and taken corrective action, but you've somehow managed to remain oblivious to the obvious consequences of your choices until they became impossible to ignore.",
    "The most concerning aspect of your situation is that you're still looking for external solutions to problems that are fundamentally internal. Until you develop the capacity for honest self-reflection and take full responsibility for the person you've become, you'll continue to repeat these same destructive patterns while wondering why life keeps 'happening' to you.",
    "What's particularly sad about your case is that you had every opportunity to avoid this situation, but you consistently chose the path of least resistance, and now you're experiencing the natural consequences of a life lived without purpose, discipline, or personal accountability. The tragedy isn't what happened to you - it's what you failed to become."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Professional Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <Heart className="text-white w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">MindWell Therapy</h1>
                <p className="text-blue-600 font-medium">Professional Mental Health Services</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-blue-600" />
                <span>Licensed Professionals</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Compassionate, Evidence-Based Therapy</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our AI-powered therapy platform provides personalized mental health support 
            tailored to your unique needs and circumstances.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-blue-100 text-sm">Always available when you need us most</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Confidential</h3>
              <p className="text-blue-100 text-sm">Your privacy is our top priority</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Expert Care</h3>
              <p className="text-blue-100 text-sm">Clinically validated approaches</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Therapy Interface */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Session Header */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Therapy Session</h3>
                <p className="text-gray-600 mt-1">Share what's on your mind in a safe, judgment-free space</p>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Dr. Sarah Chen, PhD</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Session {sessionCount + 1}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Current Focus Area */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Focus Area: {currentSession.category}
              </label>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-gray-700 italic">
                  Example scenario: "{currentSession.userProblem}"
                </p>
              </div>
            </div>

            {/* User Input */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What would you like to discuss today?
              </label>
              <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Please share what's been troubling you. Take your time - this is a safe space to express your thoughts and feelings..."
                className="w-full h-32 border border-gray-300 rounded-lg p-4 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none resize-none"
              />
            </div>

            {/* Professional Response Area */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 min-h-[400px]">
              {isAnalyzing ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-lg font-medium text-gray-700 mb-2">Analyzing your situation...</p>
                  <p className="text-sm text-gray-500">Our AI is carefully considering your concerns</p>
                </div>
              ) : showResponse ? (
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 rounded-full p-2 flex-shrink-0">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <div className="text-sm text-gray-500 mb-3">Dr. Sarah Chen, PhD - Clinical Assessment</div>
                        <div className="prose prose-gray max-w-none">
                          <p className="text-gray-800 leading-relaxed">
                            {userInput ? genericResponses[Math.floor(Math.random() * genericResponses.length)] : currentSession.terribleResponse}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {showFollowUp && (
                    <div className="flex items-start space-x-4 animate-fade-in">
                      <div className="bg-indigo-600 rounded-full p-2 flex-shrink-0">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                          <div className="text-sm text-indigo-600 font-medium mb-3">Additional Clinical Insight</div>
                          <p className="text-gray-800 leading-relaxed">
                            {userInput ? genericFollowUps[Math.floor(Math.random() * genericFollowUps.length)] : currentSession.followUpInsult}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {isTyping && !showFollowUp && (
                    <div className="flex items-center space-x-3 text-gray-500">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                      <span className="text-sm">Dr. Chen is formulating her clinical response...</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12">
                  <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-gray-700 mb-2">Ready to Begin</h4>
                  <p className="text-gray-500">
                    When you're ready, please share what's been on your mind. 
                    Our AI therapist will provide personalized insights and support.
                  </p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={startSession}
                disabled={isAnalyzing}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>{isAnalyzing ? 'Processing...' : 'Begin Session'}</span>
              </button>

              <button
                onClick={getNewScenario}
                disabled={isAnalyzing}
                className="bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <RefreshCw className="w-5 h-5" />
                <span>New Topic</span>
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-4">Our Approach</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Evidence-based therapeutic techniques</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Personalized treatment plans</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Continuous progress monitoring</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-4">Privacy & Security</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>End-to-end encryption</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>HIPAA compliant platform</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>No data sharing with third parties</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-6 h-6 text-blue-400" />
                <span className="font-bold text-lg">MindWell</span>
              </div>
              <p className="text-gray-400 text-sm">
                Professional mental health support powered by advanced AI technology.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Individual Therapy</li>
                <li>Couples Counseling</li>
                <li>Group Sessions</li>
                <li>Crisis Support</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Resources</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Mental Health Articles</li>
                <li>Self-Help Tools</li>
                <li>Community Forum</li>
                <li>Emergency Contacts</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>24/7 Support Line</li>
                <li>hello@mindwell.com</li>
                <li>Licensed in all 50 states</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 MindWell Therapy. All rights reserved. Licensed mental health professionals.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;